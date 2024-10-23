package com.qq811565456.controller.base;

import com.qq811565456.FileUploadUtil;
import com.qq811565456.Response;
import com.qq811565456.service.ConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Map;

@RestController("baseFileController")
public class FileController {
    @Autowired
    private ConfigService configService;

    @PostMapping("/api/file/upload")
    public Response api_upload(MultipartFile file) throws IOException {
        String localFilePath = configService.get("static_dir");

        String savename = FileUploadUtil.upload(localFilePath, file);
        return Response.ok(Map.of("savename",savename));
    }
    @PostMapping("/admin/file/upload")
    public Response admin_upload(MultipartFile file) throws IOException {
        String localFilePath = configService.get("static_dir");

        String savename = FileUploadUtil.upload(localFilePath, file);
        return Response.ok(Map.of("savename",savename));
    }

}
