package com.phegondev.AWSS3FileUpload.service;

import com.phegondev.AWSS3FileUpload.entity.File;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface IFileService {

    File saveFile(MultipartFile file, String name);
    List<File> getAllFiles();
}
