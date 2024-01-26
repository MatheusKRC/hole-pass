import PlanCards from '../Components/07-PlanCards';
import PaymentComponent from '../Components/12-PaymentComponent';
import { BlackHoleUser } from '../Interfaces/user';
import { objGames } from '../Utils/importGames';

function Payment() {
  const localUser:any = localStorage.getItem('blackHoleUser');
  const user:BlackHoleUser = JSON.parse(localUser);
  const holePlan = objGames.filter(({ plan }) => plan === user.planName);
  return (
    <div className="paymentPage" data-testid="payment-page">
      <div className="payment" data-testid="payment">
        <div className="paymentComponent">
          <PaymentComponent planGames={ holePlan } />
        </div>
        <div className="paymentCard" data-testid="payment-card">
          <PlanCards
            planImage=""
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
