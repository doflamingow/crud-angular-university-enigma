package com.enigma.enigma_university_boot.service;

import com.enigma.enigma_university_boot.entity.Major;
import com.enigma.enigma_university_boot.exception.DataNotFoundException;
import com.enigma.enigma_university_boot.repository.MajorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MajorServiceImpl implements MajorService {

    @Autowired
    MajorRepository majorRepository;

    @Override
    public void saveMajor(Major major) {
        majorRepository.save(major);
    }

    @Override
    public Major getMajorById(String id) {
        Major major = majorRepository.findById(id).get();
        return major;
    }

//    @Override
//    public Page<Major> getMajors(Pageable pageable) {
//        Page<Major> majors = majorRepository.findAll(pageable);
//        return majors;
//    }


    @Override
    public List<Major> getMajors() {
        return majorRepository.findAll();
    }

    @Override
    public void updateMajor(Major major) {
        if (!majorRepository.existsById(major.getId())){
            throw new DataNotFoundException(String.format(DataNotFoundException.NOT_FOUND_MESSAGE, major.getClass(), major.getId()));
        }
        majorRepository.save(major);
    }

    @Override
    public void deleteMajorById(String id) {
        majorRepository.deleteById(id);
    }
}
