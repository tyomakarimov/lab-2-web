export const getHtml = (date, meetings) => {
  return `<html>
  <body>
    <h1>Meetings scheduled for ${date}:</h1>
    <ul style="list-style: none">
    ${meetings
      .map((meeting, index) => {
        return `<li style="font-size: 24px">
        ${index + 1}. Meeting with ${meeting.person[0]} <br>&emsp; Time: ${
          meeting.time[0]
        } <br>&emsp; Place: ${meeting.location[0]}
      </li><br>`;
      })
      .join("\n")}
    </ul>
  </body>
</html>`;
};
