package kr.co.iei.subject.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import kr.co.iei.subject.vo.Subject;

@Mapper
public interface SubjectDao {

	List<Subject> selectAllSubject(Subject s);

}
