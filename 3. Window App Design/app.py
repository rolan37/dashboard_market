from tkinter import Tk,Button  # Tkinter is the Graphical User Interface lib

window = Tk()              # Create a Tk instance called window

window.title("App Name")   # Gives the title to the window
window.geometry("500x500") # Sets the size of the window in pixels
window.config(bg="black", cursor= "circle")

def something():
    print("TEST")

nextBtn = Button(window, text = 'Next', command = something())
# nextBtn.grid(row = 1, column = 1)
nextBtn.pack(padx=50,pady=100)

cancelBtn = Button(window, text = 'Cancel', command = something())
# cancelBtn.grid(row = 1, column = 2)
cancelBtn.pack(padx=100,pady=100)
window.mainloop()          # So that the window is continously displayed



list_curson = [
"arrow",
"circle",
"clock",
"cross",
"dotbox",
"exchange",
"fleur",
"heart",
"man",
"mouse",
"pirate",
"plus",
"shuttle",
"sizing",
"spider",
"spraycan",
"star",
"target",
"tcross",
"trek",
]