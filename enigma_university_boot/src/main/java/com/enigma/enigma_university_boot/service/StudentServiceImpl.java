package com.enigma.enigma_university_boot.service;

import com.enigma.enigma_university_boot.entity.Student;
import com.enigma.enigma_university_boot.exception.DataNotFoundException;
import com.enigma.enigma_university_boot.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentServiceImpl implements StudentService{

    @Autowired
    StudentRepository studentRepository;

    @Override
    public void saveStudent(Student student) {
        studentRepository.save(student);
    }

    @Override
    public Student getStudentById(String id) {
        Optional<Student> studentOptional = studentRepository.findById(id);
        if (studentOptional.isPresent()) {
            return studentOptional.get();
        }
        throw new DataNotFoundException(String.format(DataNotFoundException.NOT_FOUND_MESSAGE, Student.class, id));
    }

//    @Override
//    public Page<Student> getStudents(Pageable pageable) {
//        Page<Student> students = studentRepository.findAll(pageable);
//        return students;
//    }


    @Override
    public List<Student> getStudents() {
        return studentRepository.findAll();
    }

    @Override
    public void updateStudent(Student student) {
        if (!studentRepository.existsById(student.getId())) {
            throw new DataNotFoundException(String.format(DataNotFoundException.NOT_FOUND_MESSAGE, student.getClass(), student.getId()));
        }
        studentRepository.save(student);
    }

    @Override
    public void deleteStudentById(String id) {
        studentRepository.deleteById(id);
    }

}
