/**
 * @param focus - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family', 
    knowsProgramming = true,
    config = {family: 4}
    ) {
      const hoursBasic = 500;
      const hoursMaster = 800;
      let weeks;

      if (knowsProgramming === true) {
        weeks = hoursMaster / config[focus];
      } else {
        weeks = (hoursMaster + hoursBasic) / config[focus];
      }
      return Math.ceil(weeks);
  };  