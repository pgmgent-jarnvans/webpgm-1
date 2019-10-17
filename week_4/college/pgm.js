/**
 * Associate Degree in programming
 * ===============================
 * 
 * Objects:
 * - Course
 * 
 */

 // Describe a course with function constructor

function Course(name) {
  this.name = name;
  this.lecturers = [];
  this.toString = function() {
    return `
    Course 
    ==================================================
    ${this.name}
    `
  }
}

// Describe a lecturer with function constructor

function Lecturer(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.toString = function() {
    return `
    Course 
    ==================================================
    ${this.name}
    `
  }
}

const lecturer_1 = new Lecturer('Phillipe', 'De Pauw');
const lecturer_2 = new Lecturer('Linus', 'De Pauw');

// Make an instance of the objet type: Course

const course_1 = new Course('Web Programming 1: Front-End (Basics)');
course_1.lecturers.push(lecturer_1);
const course_2 = new Course('Web Design');
course_2.lecturers.push(lecturer_2);
const course_3 = new Course('Applied Information Technology 1');
course_3.lecturers.push(lecturer_1);
course_3.lecturers.push(lecturer_2);

const courses = [course_1, course_2, course_3];

// courses.forEach(course => {
//   console.log(course.toString());
// });

for(let i = 0; i < courses.length; i++) {
  const course = courses[i];
  console.log(course.toString());
  const lecturers = course.lecturers;
  for(let j = 0; j < lecturers.length; j++) {
    const lecturer = lecturers[j];
    console.log(`
    Lecturer
    ---------------------------------------------------
    ${lecturer.firstName} ${lecturer.lastName}
    `)
  }
}
