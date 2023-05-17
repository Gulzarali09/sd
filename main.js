function startClassification()
{

    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/TQcFG0sL_/model.json", modelLoaded);

}

function modelLoaded()
{

    classifier.classify(gotResult)

}

function gotResult(error,result)
{
    console.log("got result");
}