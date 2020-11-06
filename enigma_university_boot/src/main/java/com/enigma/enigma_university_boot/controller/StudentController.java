package com.enigma.enigma_university_boot.controller;

import com.enigma.enigma_university_boot.entity.Major;
import com.enigma.enigma_university_boot.entity.Student;
import com.enigma.enigma_university_boot.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class StudentController {

    @Autowired
    StudentService studentService;

    @PostMapping("/student")
    public void registerStudent(@RequestBody Student student){
        studentService.saveStudent(student);
    }

//    @GetMapping("/students")
//    public Page<Student> searchStudent(@RequestParam(name = "page", defaultValue = "0") Integer page,
//                                       @RequestParam(name = "sizePerPage", defaultValue = "10") Integer sizePerPage){
//        Pageable pageable = PageRequest.of(page, sizePerPage);
//        return studentService.getStudents(pageable);
//    }
        @GetMapping("/students")
        public List<Student> getStudents(){
            return studentService.getStudents();
        }

    @GetMapping("/student/{id}")
    public Student getStudent(@PathVariable(name = "id") String id){
        Student student = studentService.getStudentById(id);
        return student;
    }

    @PutMapping("/student")
    public void updateStudent(@RequestBody Student student){
        studentService.updateStudent(student);
    }

    @DeleteMapping("/student")
    public void removeStudentById(@RequestParam(name = "id") String id){
        studentService.deleteStudentById(id);
    }

}
