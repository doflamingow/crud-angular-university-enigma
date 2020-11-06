package com.enigma.enigma_university_boot.controller;

import com.enigma.enigma_university_boot.entity.Major;
import com.enigma.enigma_university_boot.service.MajorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MajorController {

    @Autowired
    MajorService majorService;

    @PostMapping("/major")
    public void registerMajor(@RequestBody Major major){
        majorService.saveMajor(major);
    }

//    @GetMapping("/majors")
//    public Page<Major> searchMajor(@RequestParam(name = "page", defaultValue = "0") Integer page,
//                                   @RequestParam(name = "sizePerPage", defaultValue = "10") Integer sizePerPage){
//        Pageable pageable = PageRequest.of(page, sizePerPage);
//        return majorService.getMajors(pageable);
//    }
    @GetMapping("/majors")
    public List<Major> getMajors(){
        return majorService.getMajors();
    }

    @GetMapping("/major/{id}")
    public Major getMajor(@PathVariable(name = "id") String id){
        System.out.println(id);
        Major major = majorService.getMajorById(id);
        return major;
    }

    @PutMapping("/major")
    public void updateMajor(@RequestBody Major major){
        majorService.updateMajor(major);
    }

    @DeleteMapping("/major")
    public void removeMajorById(@RequestParam(name = "id") String id){
        majorService.deleteMajorById(id);
    }

}
