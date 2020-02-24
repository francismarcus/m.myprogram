import React, { Component } from 'react';
import styled from 'styled-components/native';

interface Props {
	delay?: number;
	transitionDuration?: number;
}

interface State {
	maxIsVisible: number;
}

export default class C extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			maxIsVisible: 0
		};
	}
	interval: any;
	get delay() {
		return this.props.delay || 50;
	}

	get transitionDuration() {
		return this.props.transitionDuration || 400;
	}

	componentDidMount() {
		const count = React.Children.count(this.props.children);
		let i = 0;
		this.interval = setInterval(() => {
			i++;
			if (i > count) clearInterval(this.interval);

			this.setState({ maxIsVisible: i });
		}, this.delay);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
	}

	render() {
		const transitionDuration = this.transitionDuration;
		return (
			<>
				{React.Children.map(this.props.children, (child, i) => {
					return (
						<StyledView
							index={i}
							maxIsVisible={this.state.maxIsVisible}
							transitionDuration={transitionDuration}
						>
							{child}
						</StyledView>
					);
				})}
			</>
		);
	}
}

interface StyledProps {
	transitionDuration: number;
	maxIsVisible: number;
	index: number;
}

const StyledView = styled.View<StyledProps>`
	transition: opacity ${props => props.transitionDuration}ms,
                top ${props => props.transitionDuration}ms;
                
	position: 'relative';
	top: ${props => (props.maxIsVisible > props.index ? 0 : 20)};
	opacity: ${props => (props.maxIsVisible > props.index ? 1 : 0)};
`;
