package kr.co.iei.subject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import kr.co.iei.subject.dao.SubjectDao;
import kr.co.iei.subject.vo.Subject;

@Service
public class SubjectService {
	@Autowired
	private SubjectDao subjectDao;

	public List<Subject> selectAllSubject(Subject s) {
		List<Subject> list = subjectDao.selectAllSubject(s);
		return list;
	}

}
