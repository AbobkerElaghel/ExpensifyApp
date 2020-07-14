import React from "react";
import {connect} from "react-redux";
import {setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate} from "../actions/filtersAction";
import {DateRangePicker} from "react-dates";
import moment from "moment";

export class ExpenseListFilter extends React.Component {
    state = {
        calenderFocused: null,
        startDateId: this.props.filters.startDate === undefined ? moment().valueOf().toString() : this.props.filters.startDate.valueOf().toString(),
        endDateId: this.props.filters.endDate === undefined ? moment().add(1,"days").valueOf().toString() : this.props.filters.endDate.valueOf().toString()
    };

    onDateChange = ({startDate, endDate}) => {
      this.props.setStartDate(startDate);
      this.props.setEndDate(endDate);
    };

    onFocusChange = calenderFocused => {
        this.setState(() => ({calenderFocused}))
    };

    onTextChange = e => {
        this.props.setTextFilter(e.target.value);
    };

    onSortChange = event => {
        switch (event.target.value) {
            case "amount":{
                this.props.sortByAmount();
                break;
            }
            case "date":{
                this.props.sortByDate();
                break;
            }
        }
    };

    render() {
        return (

            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input className="text_input" type="text" value={this.props.filters.text} onChange={this.onTextChange}/>
                    </div>
                    <div className="input-group__item">
                    <select className="select" value={this.props.filters.sortBy} onChange={this.onSortChange}>
                                <option value="amount">Amount</option>
                                <option value="date">Date</option>
                            </select>
                    </div>
                    <div className="input-group__item">
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
                </div>
            </div>
        );
    }
}

const mapStateToProps = ({filters}) => ({
    filters
});

const mapDispatchToProps = dispatch => ({
    setStartDate: startDate => {dispatch(setStartDate(startDate))},
    setEndDate: endDate => {dispatch(setEndDate(endDate))},
    setTextFilter: text => {dispatch(setTextFilter(text))},
    sortByAmount: () => {dispatch(sortByAmount())},
    sortByDate: () => {dispatch(sortByDate())}
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilter);