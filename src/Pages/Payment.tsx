import PlanCards from '../Components/07-PlanCards';
import PaymentComponent from '../Components/12-PaymentComponent';
import { objGames } from '../Utils/importGames';

function Payment() {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user = JSON.parse(localUser);
  const holePlan = objGames.filter(({ plan }) => plan === user.planName);
  return (
    <div className="paymentPage">
      <div className="payment">
        <div className="paymentComponent">
          <PaymentComponent planGames={ holePlan } />
        </div>
        <div className="paymentCard">
          <PlanCards
            planCard="paymentPlanCard"
            id=""
            name={ user.planName }
            img={ user.plan }
            value={ user.planValue }
            benefits={ user.benefits }
          />
        </div>
      </div>

    </div>
  );
}

export default Payment;
