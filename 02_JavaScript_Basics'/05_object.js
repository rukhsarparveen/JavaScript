//---- Object Destructuring ------
const course = {
    name:"rukhsar",
    subject:"computer",
    courseInstructor: "abc"
}

// Now every time i need courseInstructor i will have to write course.courseInstructor, we can use some shortcut

const {courseInstructor} = course
 // now i don't need to write course.courseInstructor i can directly write courseInstructor to access it
 console.log(courseInstructor)

 // we can further reduce the size
 const {subject: sub} = course
 console.log(sub)