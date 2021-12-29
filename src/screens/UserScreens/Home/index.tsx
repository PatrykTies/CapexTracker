import isEmpty from 'lodash/isEmpty';
import React, {Component, useCallback} from 'react';
import {
  Platform,
  Alert,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
  SafeAreaView,
  Dimensions,
  StatusBar,
} from 'react-native';
import {
  ExpandableCalendar,
  AgendaList,
  CalendarProvider,
  WeekCalendar,
} from 'react-native-calendars';
import {Text as ThemeText, Box, Card} from '../../../theme';

// data
import {data} from './dataItems';
import {markedWeeks} from './weeks';

// config
import {testIDs} from './calendarConfig';

const themeColor = '#00AAAF';
const lightThemeColor = 'rgb(235, 249, 249)';

interface Props {
  weekView?: boolean;
}

export default class ExpandableCalendarScreen extends Component<Props> {
  onDateChanged = (/* date, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onDateChanged: ', date, updateSource);
    // fetch and set data for date + week ahead
  };

  onMonthChange = (/* month, updateSource */) => {
    // console.warn('ExpandableCalendarScreen onMonthChange: ', month, updateSource);
  };

  renderItem = ({item}: any) => {
    return <AgendaItem item={item} />;
  };

  getMarkedDates = () => {
    const marked: any = {};
    data.forEach(item => {
      // NOTE: only mark dates with data
      if (item.data && item.data.length > 0 && !isEmpty(item.data[0])) {
        marked[item.title] = {marked: true};
      } else {
        marked[item.title] = {disabled: true};
      }
    });
    return marked;
  };

  getTheme = () => {
    const disabledColor = 'grey';

    return {
      // arrows
      arrowColor: 'black',
      arrowStyle: {padding: 0},
      // month
      monthTextColor: 'black',
      textMonthFontSize: 16,
      textMonthFontFamily: 'HelveticaNeue',
      textMonthFontWeight: 'bold',
      // day names
      textSectionTitleColor: 'black',
      textDayHeaderFontSize: 12,
      textDayHeaderFontFamily: 'HelveticaNeue',
      textDayHeaderFontWeight: 'normal',
      // dates
      dayTextColor: themeColor,
      textDayFontSize: 18,
      textDayFontFamily: 'HelveticaNeue',
      textDayFontWeight: '500',
      textDayStyle: {marginTop: Platform.OS === 'android' ? 2 : 4},
      // selected date
      selectedDayBackgroundColor: themeColor,
      selectedDayTextColor: 'white',
      // disabled date
      textDisabledColor: disabledColor,
      // dot (marked date)
      dotColor: themeColor,
      selectedDotColor: 'white',
      disabledDotColor: disabledColor,
      dotStyle: {marginTop: -2},
    };
  };

  render() {
    const {width, height: wHeight} = Dimensions.get('window');
    return (
      <SafeAreaView
        height={
          wHeight - (Platform.OS === 'android' ? StatusBar.currentHeight : 0)
        }>
        <CalendarProvider
          date={data[0].title}
          onDateChanged={this.onDateChanged}
          onMonthChange={this.onMonthChange}
          showTodayButton
          disabledOpacity={0.6}
          // theme={{
          //   todayButtonTextColor: themeColor
          // }}
          // todayBottomMargin={16}
        >
          {this.props.weekView ? (
            <WeekCalendar
              testID={testIDs.weekCalendar.CONTAINER}
              firstDay={1}
              markedDates={this.getMarkedDates()}
            />
          ) : (
            <ExpandableCalendar
              testID={testIDs.expandableCalendar.CONTAINER}
              // horizontal={false}
              // hideArrows
              //disablePan
              //hideKnob
              initialPosition={ExpandableCalendar.positions.OPEN}
              // calendarStyle={styles.calendar}
              // headerStyle={styles.calendar} // for horizontal only
              // disableWeekScroll
              // theme={this.getTheme()}
              disableAllTouchEventsForDisabledDays
              firstDay={1} //this makes Monday as first day to display
              //markedDates={this.getMarkedDates()} // {'2019-06-01': {marked: true}, '2019-06-02': {marked: true}, '2019-06-03': {marked: true}};
              leftArrowImageSource={require('../../../assets/previous.png')}
              rightArrowImageSource={require('../../../assets/next.png')}
              markedDates={markedWeeks}
              // Date marking style [simple/period/multi-dot/custom]. Default = 'simple'
              markingType={'period'}
            />
          )}
          <AgendaList
            sections={data}
            extraData={this.state}
            renderItem={this.renderItem}
            // sectionStyle={styles.section}
          />
        </CalendarProvider>
      </SafeAreaView>
    );
  }
}

interface ItemProps {
  item: any;
}

const AgendaItem = React.memo(function AgendaItem(props: ItemProps) {
  const {item} = props;

  const buttonPressed = useCallback(() => {
    Alert.alert('Show me more');
  }, []);

  const itemPressed = useCallback(() => {
    Alert.alert(item.title);
  }, []);

  if (isEmpty(item)) {
    return (
      <View style={styles.emptyItem}>
        <Text style={styles.emptyItemText}>No Events Planned Today</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      onPress={itemPressed}
      style={styles.item}
      testID={testIDs.agenda.ITEM}>
      <View>
        <Text style={styles.itemHourText}>{item.hour}</Text>
        <Text style={styles.itemDurationText}>{item.duration}</Text>
      </View>
      <Card
        variant="shadow_md"
        justifyContent="center"
        alignItems="center"
        backgroundColor="yellow">
        <Text style={styles.itemTitleText}>{item.title}</Text>
      </Card>

      <View style={styles.itemButtonContainer}>
        <Button color={'grey'} title={'Edit'} onPress={buttonPressed} />
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  section: {
    backgroundColor: lightThemeColor,
    color: 'grey',
    textTransform: 'capitalize',
  },
  item: {
    padding: 20,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    flexDirection: 'row',
  },
  itemHourText: {
    color: 'black',
  },
  itemDurationText: {
    color: 'grey',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
  itemTitleText: {
    color: 'black',
    marginLeft: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemButtonContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
  emptyItem: {
    paddingLeft: 20,
    height: 52,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
  emptyItemText: {
    color: 'lightgrey',
    fontSize: 14,
  },
});
