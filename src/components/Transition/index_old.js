import React, { PureComponent } from 'react';

// == PropTypes
import PropTypes from 'prop-types';

// == React Transition
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group';

const timeout = 600;
const getTransitionStyles = {
  entering: {
    position: 'absolute',
    opacity: 0,
  },
  entered: {
    transition: `opacity ${timeout}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `all ${timeout}ms ease-in-out`,
    opacity: 0,
    transform: 'translateY(-10px)',
  },
};


class Transition extends PureComponent {
  render() {
    const { children, location } = this.props;

    return (
      <TransitionGroup>
        <ReactTransition
          key={location.pathname}
          timeout={{
            enter: timeout,
            exit: timeout,
          }}
        >
          {
            (status) => (
              <div
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {children}
              </div>
            )
          }
        </ReactTransition>
      </TransitionGroup>
    );
  }
}

// == PropTypes
Transition.propTypes = {
  children: PropTypes.shape().isRequired,
  location: PropTypes.shape().isRequired,
};

export default Transition;
