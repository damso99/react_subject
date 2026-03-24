import { useEffect, useState } from "react";
import styles from "./Subject.module.css";
import axios from "axios";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const SubjectList = () => {
  const [subjectList, setSubjectList] = useState([]);
  const [orderType, setOrderType] = useState(1);
  const [category, setCategory] = useState(0);
  const [level, setLevel] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [title, setTitle] = useState("");
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKSERVER}/subject?subjectTitle=${title}&order=${orderType}&subjectCategory=${category}&subjectLevel=${level}`,
      )
      .then((res) => {
        setSubjectList(res.data);
        console.log(level);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [orderType, category, level, title]);
  const search = () => {
    setTitle(keyword);
    setKeyword("");
  };
  const reset = () => {
    setCategory(0);
    setLevel(0);
    setOrderType(1);
    setKeyword("");
  };
  return (
    <>
      <div className={styles.content_wrap}>
        <div className={styles.side_menu}>
          <div className={styles.input_wrap}>
            <input
              type="text"
              value={keyword}
              onChange={(e) => {
                setKeyword(e.target.value);
              }}
            ></input>
            <button type="submit" className={styles.btn} onClick={search}>
              검색
            </button>
          </div>
          <select
            className={styles.select}
            value={orderType}
            onChange={(e) => {
              setOrderType(e.target.value);
            }}
          >
            <option value={1}>정렬기준</option>
            <option value={2}>난이도 오름차순</option>
            <option value={3}>난이도 내림차순</option>
            <option value={4}>수강인원 오름차순</option>
            <option value={5}>수강인원 내림차순</option>
          </select>
          <select
            className={styles.select}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value={0}>과목 분류</option>
            <option value={1}>백엔드</option>
            <option value={2}>프론트엔드</option>
            <option value={3}>DB</option>
          </select>
          <select
            className={styles.select}
            value={level}
            onChange={(e) => {
              setLevel(e.target.value);
            }}
          >
            <option value={0}>난이도 분류</option>
            <option value={1}>초급</option>
            <option value={2}>중급</option>
            <option value={3}>고급</option>
          </select>
          <button type="submit" className={styles.btn} onClick={reset}>
            초기화
          </button>
        </div>
        <div className={styles.subject_list_wrap}>
          <div className={`${styles.item_wrap} ${styles.item_header}`}>
            <div className={styles.subject_no}>강의 번호</div>
            <div className={styles.subject_title}>강의 제목</div>
            <div className={styles.subject_instructor}>강사</div>
            <div className={styles.subject_category}>분류</div>
            <div className={styles.subject_level}>난이도</div>
            <div className={styles.subject_count}>정원</div>
          </div>
          {subjectList.map((subject) => {
            return (
              <Subject key={`subject-${subject.subjectNo}`} subject={subject} />
            );
          })}
        </div>
      </div>
    </>
  );
};
const Subject = ({ subject }) => {
  return (
    <div className={`${styles.item_wrap} ${styles.item_list}`}>
      <div className={styles.subject_no}>{subject.subjectNo}</div>
      <div className={styles.subject_title}>{subject.subjectTitle}</div>
      <div className={styles.subject_instructor}>
        {subject.subjectInstructor}
      </div>
      <div className={styles.subject_category}>
        {subject.subjectCategory === 1
          ? "백엔드"
          : subject.subjectCategory === 2
            ? "프론트엔드"
            : "DB"}
      </div>
      <div className={styles.subject_level}>
        {subject.subjectLevel === 1
          ? "초급"
          : subject.subjectLevel === 2
            ? "중급"
            : "고급"}
      </div>
      <div className={styles.subject_count}>{subject.subjectCount}</div>
    </div>
  );
};

export default SubjectList;
