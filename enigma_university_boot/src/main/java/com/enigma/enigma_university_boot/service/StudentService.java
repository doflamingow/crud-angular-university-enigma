package com.enigma.enigma_university_boot.service;

import com.enigma.enigma_university_boot.entity.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface StudentService {

    public void saveStudent(Student student);

    public Student getStudentById(String id);

//    public Page<Student> getStudents(Pageable pageable);

    public List<Student> getStudents();

    public void updateStudent(Student student);

    public void deleteStudentById(String id);


}
