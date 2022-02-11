questions = open("questions.txt", "r")

lines = questions.readlines()
arrayFile = open("arrayFile.txt", "w")
arrayFile.truncate(0)

for line in lines:
    arrayFile.write("'" + line.strip("\n") + "',")