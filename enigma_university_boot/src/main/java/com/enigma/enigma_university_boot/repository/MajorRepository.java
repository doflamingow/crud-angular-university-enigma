package com.enigma.enigma_university_boot.repository;

import com.enigma.enigma_university_boot.entity.Major;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MajorRepository extends JpaRepository<Major, String> {
}
