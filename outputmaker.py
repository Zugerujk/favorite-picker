import os

top_directory = 'alms'

filename_medaltype_pairs = [
    # Bandai
    [" Gray", "gray"],
    [" Soul", "soul"],
    [" Kuroi", "kuroi"],
    [" Treasure", "treasure"],
    [" Song", "song"],
    [" Sangokushi", "sangokushi"],
    [" Merican", "merican"],
    [" Lucky", "luck"],
    [" Dream", "dream"],
    [" Classic", "z"],
    [" Zmedal", "z"],
    [" Umedal", "u"],
    [" Bmedal", "b"],
    [" MNmedal", "mn"],
    [" ZMNmedal", "zmn"],
    [" SMedal", "sm"],
    [" UniqueSMedal", "usm"],
    # Hasbro
    [" HGray", "hgray"],
    [" HYM", "hyomotion"],
    [" HYMX2", "hyomotionx2"],
]

def formatEntry(dafile, filename):
    # Figure out the type of medal
    itemType = "other"
    for filename_medaltype_pair in filename_medaltype_pairs:
        if (filename.find(str(filename_medaltype_pair[0])) != -1):
            itemType = filename_medaltype_pair[1]

    # Figure out if it's alt art.
    itemAltArt = "false"
    if (filename.find(" Alt") != -1) or (filename.find(" Stray") != -1):
        itemAltArt = "true"

    itemID = filename
    itemPortrait = dafile
    itemsString = "{{id: \"{itemID}\", image: \"{itemPortrait}\", medalType: \"{itemType}\", altArt: \"{itemAltArt}\"}},".format(itemID = itemID, itemPortrait = itemPortrait, itemType=itemType, itemAltArt=itemAltArt)
    itemsStringFormatted = itemsString.replace("\\", "/")
    return itemsStringFormatted

def combfolder(directory):
    # go through all files
    for filename in os.listdir(directory):
        dafile = os.path.join(directory, filename)
        # If it's a directory, recurrrr
        if os.path.isdir(dafile):
            combfolder(dafile)

        if os.path.isfile(dafile):
            omo.write(formatEntry(dafile, filename) + "\n")
            print(formatEntry(dafile, filename))

with open('outputmakeroutput.txt', 'w') as omo:
    combfolder(top_directory)