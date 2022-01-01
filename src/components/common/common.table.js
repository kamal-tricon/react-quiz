export const CommonTable = ({trainList}) => {
    console.log(trainList)
    return (
        <>
            <div>Common Table container {trainList[0].trainName}</div>
        </>
    );
}