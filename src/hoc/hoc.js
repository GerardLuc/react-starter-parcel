import React from 'react';

const Hoc = (WrappedComponent, className) => props => (
  <div className={className}>
    <WrappedComponent {...props} />
  </div>
);

// Second version statefull Hoc Component
// const Hoc = (WrappedComponent, className) => {
//   return class extends Component {
//     render() {
//       return (
//         <div className={className}>
//           <WrappedComponent {...this.props} />
//         </div>
//       )
//     }
//   }
// }

export default Hoc;
