import axios from 'axios';

class Courses { 
    //this class should interface with the db.json for courses
    
    constructor() {
        this.courses = [];
    }

    async fetchCourses() {
        const response = await axios.get(`http://localhost:5000/courses`);
        
        const updatedCourses = [
            // ...this.courses,
            response.data
        ];

        this.courses = updatedCourses;
        return this.courses;
    }

    addCourse() {
        //Todo:
        //add the course to db.json
        //then update this.courses with new course
    }

    editCourseById(id, props) {
        //Todo:
        //update the course by id, with the given props
        //update this.courses to reflect the change
    }

    deleteCourseById(id) {
        //Todo:
        //delete the course with the given id
        //update this.courses to reflect changes
    }
 }

export default Courses;
