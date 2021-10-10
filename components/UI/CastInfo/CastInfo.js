import Link from 'next/link'

const CastInfo = (props) => {
    return(
        <div className="cast-info">
            <div className="cast-info__group-title">
                Cast & Crew
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>Lui Kang</li>
                    <li>James Jacob</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Jax</li>
                    <li>Daniel Lucas</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Sub-Zero</li>
                    <li>Lil Baby</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Kao</li>
                    <li>Jordan Patterson</li>
                </ul>
                <ul className="cast-info__crew">
                    <li>Sonya</li>
                    <li>Jennifer Lopez</li>
                </ul>
            </div>

            <div className="cast-info__group-title">
                Director
            </div>
            <div className="cast-info__list">
                <ul className="cast-info__crew">
                    <li>Lui Kang</li>
                    <li>James Jacob</li>
                </ul>
            </div>
        </div>
    )
}

export default CastInfo