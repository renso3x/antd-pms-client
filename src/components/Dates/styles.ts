import styled from 'styled-components';

export const StyleDateRanges = styled.div`
  && {
    .selectable {
      .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
        background-color: #f0f8ff !important;
        color: #4a90e2;
      }

      .DayPicker-Day {
        border-radius: 0 !important;
      }

      .DayPicker-Day--start {
        border-top-left-radius: 50% !important;
        border-bottom-left-radius: 50% !important;
      }

      .DayPicker-Day--end {
        border-top-right-radius: 50% !important;
        border-bottom-right-radius: 50% !important;
      }
    }
  }
`