import React, { useState, createRef } from 'react';
import moment from 'moment';
import { Button, Row, Col, Card, Divider } from 'antd';
import DayPicker, { DateUtils } from 'react-day-picker';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { Helmet } from 'react-helmet';
import 'react-day-picker/lib/style.css';

interface DateRangesProps {
  numberOfMonths: number;
}

interface State  {
  from: Date,
  to: Date
}

export const DateRanges: React.SFC<DateRangesProps> = ({
  numberOfMonths = 2
}) => {
  const toTextInput =  createRef<DayPickerInput>();
  const [state, setState] = useState<State>({
    from: new Date(),
    to:  new Date(),
  })

  const handleDayClick = (day: Date) => {
    const range = DateUtils.addDayToRange(day, state);
    setState(range);
  }

  const resetDate = () => setState({
    from: new Date(),
    to:  new Date(),
  })

  const { from, to } = state;
  const modifiers = { start: from, end: to };

  return (
    <div>
      <Card
        actions={[
          <Button type="primary" onClick={resetDate}>Reset</Button>
        ]}
      >
        <Divider orientation="left" plain>
          Select Dates
        </Divider>
        <DayPicker
          className="Selectable"
          numberOfMonths={numberOfMonths}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={handleDayClick}
        />
      </Card>
      <Helmet>
        <style>{`
          .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
            background-color: #f0f8ff !important;
            color: #4a90e2;
          }
          .Selectable .DayPicker-Day {
            border-radius: 0 !important;
          }
          .Selectable .DayPicker-Day--start {
            border-top-left-radius: 50% !important;
            border-bottom-left-radius: 50% !important;
          }
          .Selectable .DayPicker-Day--end {
            border-top-right-radius: 50% !important;
            border-bottom-right-radius: 50% !important;
          }
        `}</style>
      </Helmet>
    </div>
  );
}
