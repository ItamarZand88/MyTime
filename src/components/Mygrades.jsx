import { Card, List, ListItem, Title } from "@tremor/react";
const style = {
  title: "text-center", // This will align the text to the right
};

const grades = [
  {
    grade: "80",
    course: "חדוא",
  },
  {
    grade: "90",
    course: "אלגוריתמים",
  },
  {
    grade: "60",
    course: "מבוא למחשבים",
  },
  {
    grade: "73",
    course: "אלגברה",
  },
  {
    grade: "100",
    course: "קומבינטוריקה",
  },
  {
    grade: "77",
    course: "לוגיקה",
  },
];

const ScoreList = () => {
  return (
    <Card className="max-w-full  mb-4 mr-2">
      <Title className={style.title}>הציונים שלי </Title>
      <List>
        {grades.map((item) => (
          <ListItem key={item.grade}>
            <span>{item.grade}</span>
            <span>{item.course}</span>
          </ListItem>
        ))}
      </List>
    </Card>
  );
};

export default ScoreList;
