import React, {useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View, Text, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../utils/colors';
import MyPressable from './MyPressable';

const MONTH_NAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CustomCalendar = ({minDate}) => {
  const [dateList, setDateList] = useState([]);

  let currentMonthDate = useRef(new Date()).current;
  let minimumDate = useRef(minDate).current;
  let maximumDate = useRef(null).current;

  const setListOfDate = useCallback(monthDate => {
    const dates = [];
    let newDate = new Date();
    newDate.setFullYear(monthDate.getFullYear(), monthDate.getMonth(), 0);
    const prevMonthDate = newDate.getDate();
    let previousMonthDay = 0;

    if (newDate.getDay() !== 0) {
      previousMonthDay = newDate.getDay() === 0 ? 7 : newDate.getDay();
      for (let i = 1; i <= previousMonthDay; i++) {
        const date = new Date(newDate);
        date.setDate(prevMonthDate - (previousMonthDay - i));
        dates.push(date);
      }
    }
    // 42 = 7 * 6:- 7 == column, 6 == rows
    for (let i = 0; i < 42 - previousMonthDay; i++) {
      const date = new Date(newDate);
      date.setDate(prevMonthDate + (i + 1));
      dates.push(date);
    }

    setDateList(dates);
  }, []);

  useEffect(() => {
    setListOfDate(new Date());
  }, [setListOfDate]);

  const onDatePressedValidations = date => {
    if (currentMonthDate.getMonth() === date.getMonth()) {
      if (minimumDate != null && maximumDate != null) {
        const newMinimumDate = new Date(minimumDate);
        newMinimumDate.setDate(minimumDate.getDate() - 1);
        const newMaximumDate = new Date(maximumDate);
        newMaximumDate.setDate(maximumDate.getDate() + 1);

        if (date > newMinimumDate && date < newMaximumDate) {
          onDateClick(date);
        }
      } else if (minimumDate != null) {
        const newMinimumDate = new Date(minimumDate);

        if (date >= newMinimumDate) {
          onDateClick(date);
        }
      } else if (maximumDate != null) {
        const newMaximumDate = new Date(maximumDate);
        newMaximumDate.setDate(maximumDate.getDate() + 1);

        if (date < newMaximumDate) {
          onDateClick(date);
        }
      } else {
        onDateClick(date);
      }
    }
  };

  const onDateClick = date => {
    console.log(date);
  };

  const getDaysNameUI = () => {
    if (dateList.length === 0) {
      return;
    }

    const listUI = [];
    for (let i = 0; i < 7; i++) {
      const weekDay = WEEK_DAYS[dateList[i].getDay()];

      listUI.push(
        <Text key={weekDay} style={styles.weekDayText}>
          {weekDay}
        </Text>,
      );
    }
    return listUI;
  };

  const getDaysNoUI = () => {
    const noList = [];
    let count = 0;

    for (let i = 0; i < dateList.length / 7; i++) {
      const listUI = [];

      for (let j = 0; j < 7; j++) {
        const date = dateList[count];

        listUI.push(
          <View key={`day_${count}`} style={{flex: 1, aspectRatio: 1.0}}>
            <View
              style={{
                flex: 1,
                marginVertical: 3,
                backgroundColor: 'transparent',
                paddingLeft: 4,
                paddingRight: 4,
              }}
            />
            <View
              style={[
                styles.dayNoBtnContainer,
                {
                  borderWidth: 0,
                  borderColor: 'transparent',
                  backgroundColor: 'rgb(84, 211, 194)',
                },
                styles.activeDatesShadow,
              ]}>
              <MyPressable
                style={styles.dayNoBtn}
                android_ripple={{borderless: true}}
                onPress={() => onDatePressedValidations(date)}>
                <Text
                  style={{
                    fontSize: 18,
                    color:
                      currentMonthDate.getMonth() === date.getMonth()
                        ? 'black'
                        : 'lightgrey',
                  }}>
                  {date.getDate()}
                </Text>
                <View
                  style={[
                    styles.currentDateIndicator,
                    {
                      backgroundColor:
                        new Date().toDateString() === date.toDateString()
                          ? 'rgb(84, 211, 194)'
                          : 'transparent',
                    },
                  ]}
                />
              </MyPressable>
            </View>
          </View>,
        );

        count += 1;
      }

      noList.push(
        <View key={`daysRow_${i}`} style={styles.dayNoRowView}>
          {listUI}
        </View>,
      );
    }
    return noList;
  };

  return (
    <View style={{paddingVertical: 4}}>
      <View style={{flexDirection: 'row', padding: 8}}>
        <View style={styles.arrowContainerStyle}>
          <MyPressable
            style={styles.arrowBtnStyle}
            touchOpacity={0.6}
            onPress={() => {
              currentMonthDate.setMonth(currentMonthDate.getMonth() - 1);
              setListOfDate(currentMonthDate);
            }}>
            <Icon name="keyboard-arrow-left" size={28} color="grey" />
          </MyPressable>
        </View>
        <Text style={styles.monthHeaderStyle}>
          {MONTH_NAMES[currentMonthDate.getMonth()]}
          {`, ${currentMonthDate.getFullYear()}`}
        </Text>
        <View style={styles.arrowContainerStyle}>
          <MyPressable
            style={styles.arrowBtnStyle}
            touchOpacity={0.6}
            onPress={() => {
              currentMonthDate.setMonth(currentMonthDate.getMonth() + 1);
              setListOfDate(currentMonthDate);
            }}>
            <Icon name="keyboard-arrow-right" size={28} color="grey" />
          </MyPressable>
        </View>
      </View>
      <View style={styles.weekDayContainer}>{getDaysNameUI()}</View>
      <View>{getDaysNoUI()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowContainerStyle: {
    borderRadius: 24,
    borderWidth: 0.6,
    borderColor: 'lightgrey',
    overflow: 'hidden',
  },
  arrowBtnStyle: {
    height: 38,
    width: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthHeaderStyle: {
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
  },
  weekDayContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  weekDayText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    color: colors.dentalGreen,
  },
  dayNoRowView: {
    flexDirection: 'row',
    marginVertical: 1,
  },
  dayNoBtn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayNoBtnContainer: {
    ...StyleSheet.absoluteFillObject,
    padding: 2,
    borderRadius: 32,
  },
  activeDatesShadow: {
    ...Platform.select({
      ios: {
        shadowColor: 'grey',
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.6,
        shadowRadius: 2.63,
      },
      android: {elevation: 4},
    }),
  },
  currentDateIndicator: {
    position: 'absolute',
    bottom: 6,
    height: 4,
    width: 4,
    borderRadius: 2,
  },
});

export default CustomCalendar;
