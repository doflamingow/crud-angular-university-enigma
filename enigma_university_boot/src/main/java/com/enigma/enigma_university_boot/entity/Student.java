package com.enigma.enigma_university_boot.entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "mst_student")
public class Student {

    @Id
    @GeneratedValue(generator = "system-uuid")
    @GenericGenerator(name = "system-uuid", strategy = "uuid")
    private String id;
    @Column(unique = true)
    private String nim;
    private String name;
    private String address;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private Date birthdate;
    private String gender;

    @ManyToOne
    @JoinColumn(name = "major_id")
    private Major major;

    public Student() {
    }

    public Student(String id, String nim, String name, String address, Date birthdate, String gender, Major major) {
        this.id = id;
        this.nim = nim;
        this.name = name;
        this.address = address;
        this.birthdate = birthdate;
        this.gender = gender;
        this.major = major;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getNim() {
        return nim;
    }

    public void setNim(String nim) {
        this.nim = nim;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Date getBirthdate() {
        return birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Major getMajor() {
        return major;
    }

    public void setMajor(Major major) {
        this.major = major;
    }
}
