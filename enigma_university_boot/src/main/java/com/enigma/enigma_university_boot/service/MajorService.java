package com.enigma.enigma_university_boot.service;

import com.enigma.enigma_university_boot.entity.Major;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface MajorService {

    public void saveMajor(Major major);

    public Major getMajorById(String id);

//    public Page<Major> getMajors(Pageable pageable);

    public List<Major> getMajors();

    public void updateMajor(Major major);

    public void deleteMajorById(String id);

}
