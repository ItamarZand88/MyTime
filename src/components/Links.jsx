import { Card, Title, Button } from "@tremor/react";
const style = {
  title: "text-center", // This will align the text to the right
};

const data = [
  {
    name: "moodle",
    href: "https://moodle.bgu.ac.il/moodle/local/mydashboard/",
  },
  {
    name: "Google",
    href: "https://google.com",
  },
  {
    name: "GitHub",
    href: "https://github.com/tremorlabs/tremor",
  },
  {
    name: "איזור אישי בן גוריון",
    href: "https://bgu4u22.bgu.ac.il/apex/f?p=104:LOGIN_DESKTOP",
  },
  {
    name: "גזר",
    href: "https://gezer1.bgu.ac.il/meser/hlogin.php",
  },
  {
    name: "chatGPT",
    href: "https://chat.openai.com/",
  },
];
const Links = () => {
  return (
    <Card className="max-w-full my-4" dir="rtl">
      <Title className="text-center mb-4">קישורים שימושיים</Title>
      {data.map((link, index) => (
        <Button
          color="slate-800"
          key={index}
          className="w-full mb-2"
          onClick={() => window.open(link.href, "_blank")}
        >
          {link.name}
        </Button>
      ))}
    </Card>
  );
};

export default Links;
