import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';

import {Calendar} from 'react-native-calendars';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {screenWidth} from '../../../utils/func';

const SelectTime = props => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <Calendar // Initially visible month. Default = now
        disableArrowLeft={true}
        // Disable right arrow. Default = false
        disableArrowRight={true}
        // Replace default month and year title with custom one. the function receive a date as parameter
        renderHeader={date => {
          /*Return JSX*/
        }}
        // Handler which gets executed on day long press. Default = undefined
        onDayLongPress={day => {
          console.log('selected day', day);
        }}
        // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
        firstDay={1}
        // Hide month navigation arrows. Default = false
        enableSwipeMonths={true}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        disableAllTouchEventsForDisabledDays={true}
        // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        hideArrows={true}
        // Do not show days of other months in month page. Default = false
        hideExtraDays={true}
        // Hide day names. Default = false
        hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={true}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month
        initialDate={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        minDate={'2012-05-10'}
        // Disable left arrow. Default = false
        maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        onDayPress={day => {
          console.log('selected day', day);
        }}
        // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
        monthFormat={'yyyy MM'}
        // Handler which gets executed when visible month changes in calendar. Default = undefined
        onMonthChange={month => {
          console.log('month changed', month);
        }}
        // Enable the option to swipe between months. Default = false
        onPressArrowLeft={subtractMonth => subtractMonth()}
        // Handler which gets executed when press arrow icon right. It receive a callback can go next month
        onPressArrowRight={addMonth => addMonth()}
      />
    </ScrollView>
  );
};

export default SelectTime;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width: screenWidth,
    paddingHorizontal: wp('4%'),
  },
});
