package com.phegondev.AWSS3FileUpload.repo;

import com.phegondev.AWSS3FileUpload.entity.File;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FileRepo extends JpaRepository<File, Long> {
}
