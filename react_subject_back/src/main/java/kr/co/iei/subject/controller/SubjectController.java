package kr.co.iei.subject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import kr.co.iei.subject.service.SubjectService;
import kr.co.iei.subject.vo.Subject;

@RestController
@CrossOrigin("*")
@RequestMapping(value="/subject")
public class SubjectController {
	@Autowired
	private SubjectService subjectService;
	
	@GetMapping
	public ResponseEntity<?> selectAllSubject(@ModelAttribute Subject s){
		List<Subject> list = subjectService.selectAllSubject(s);
		System.out.println(s);
		return ResponseEntity.ok(list);
	}
}
