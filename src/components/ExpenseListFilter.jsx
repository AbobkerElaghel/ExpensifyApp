import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filtersAction";
import {DateRangePicker} from "react-dates";

class ExpenseListFilter extends React.Component {

    state = {
        calenderFocused: null,
        startDateId: this.props.filters.startDate.valueOf().toString(),
        endDateId: this.props.filters.endDate.valueOf().toString()
    };

    onDateChange = ({startDate, endDate}) => {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange = calenderFocused => {
        this.setState(() => ({calenderFocused}))
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setTextFilter(e.target.value));
                }}/>
                <select value={this.props.filters.sortBy} onChange={event => {
                    switch (event.target.value) {
                        case "amount":{
                            this.props.dispatch(sortByAmount());
                            break;
                        }
                        case "date":{
                            this.props.dispatch(sortByDate());
                            break;
                        }
                    }
                }}>
                    <option value="amount">Amount</option>
                    <option value="date">Date</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    startDateId={this.state.startDateId}
                    endDate={this.props.filters.endDate}
                    endDateId={this.state.endDateId}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    readOnly
                />
            </div>
        );
    }
}

const mapStateToProps = ({filters}) => ({
    filters
});

export default connect(mapStateToProps)(ExpenseListFilter);