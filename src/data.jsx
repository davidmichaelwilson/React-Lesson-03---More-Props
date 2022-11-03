export const userData = {
  name: "Bilbo Baggins",
  username: "Bagginz",
  apiKey: "09sducj238fha",
  now: new Date(),
  lastLogin: new Date(new Date().setDate(new Date().getDate()-1)),
  nextEvent: {
    name: "Code Freeze",
    time: new Date(new Date().setDate(new Date().getDate()+5))
  },
  repos : [
    {
      name: "Video game",
      lastModified: new Date(),
      language: "JavaScript",
      collaborators: ["Odi Wanna Kobi", "Lūk Skystroller"],
      content: "console.log('Gonna make a video game!')",
      open: true
    },
    {
      name: "DS&A",
      lastModified: new Date(new Date().setDate(new Date().getDate()-1)),
      language: "C++",
      collaborators: ["Frodo", "Gandalf"],
      content: "int new_int = new int();",
      open: false
    },
    {
      name: "Hello World",
      lastModified: new Date(new Date().setDate(new Date().getDate()-5)),
      language: "Python",
      collaborators: ["Frodo", "Gandalf", "Smaug"],
      content: "print('Hello World')",
      open: false
    }
  ]
}