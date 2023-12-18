// code your solution here
 function superbowlWin(record) {
  const winning = record.find(entry => entry.result === 'W');
  return winning ? winning.year : null;
}
function superbowlWin(record) {
     const winning = record.find(entry => entry.result === 'W');
     return  winning ? winning.year : undefined;
   }
