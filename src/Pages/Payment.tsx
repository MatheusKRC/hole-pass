import PlanCards from '../Components/07-PlanCards';

function Payment() {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user = JSON.parse(localUser);
  return (
    <div>
      <div>
        <PaymentComponent />
      </div>
      <div>
        <PlanCards
          name={ user.planName }
          value={ user.planValue }
          benefits={ user.benefits }
        />
      </div>
    </div>
  );
}

export default Payment;
