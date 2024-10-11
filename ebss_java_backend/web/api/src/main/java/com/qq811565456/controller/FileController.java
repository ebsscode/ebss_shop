package com.qq811565456.controller;

import com.qq811565456.FileUploadUtil;
import com.qq811565456.Response;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController
@RequestMapping("/api/file")
public class FileController {


    private String localFilePath ="D:/javaUpload";

    @PostMapping("upload")
    public Response upload(MultipartFile file) throws IOException {
        String savename = FileUploadUtil.upload(localFilePath, file);
        return Response.ok(Map.of("savename",savename));
    }

}
