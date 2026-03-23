package kr.co.iei.subject.vo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Subject {
	private Integer subjectNo;
	private String subjectTitle;
	private String subjectInstructor;
	private Integer subjectCategory;
	private Integer subjectLevel;
	private Integer subjectCount;
	private Integer order; 
}
