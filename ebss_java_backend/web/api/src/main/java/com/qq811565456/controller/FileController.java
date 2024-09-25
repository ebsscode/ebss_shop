package com.qq811565456.controller;

import com.qq811565456.FileUploadUtil;
import com.qq811565456.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/file")
public class FileController {

    public String localFilePrefix = "/";

    private String localFilePath ="D:/javaUpload";

    @GetMapping("upload")
    public Response upload(MultipartFile file) throws IOException {
        String name = FileUploadUtil.upload(localFilePath, file);
        String url = localFilePrefix + name;
        return Response.ok();
    }

}
