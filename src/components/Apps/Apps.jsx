import downloadIcon from "../../assets/image/icon-downloads.png";
import ratingsIcon from "../../assets/image/icon-ratings.png";
import Image2 from "../../assets/image/demo-app (1).webp";
import Image3 from "../../assets/image/demo-app (2).webp";
import Image4 from "../../assets/image/demo-app (3).webp";
import Image5 from "../../assets/image/demo-app (4).webp";
import Image6 from "../../assets/image/demo-app (5).webp";
import Image7 from "../../assets/image/demo-app (6).webp";

const Apps = () => {
  return (
    <div>
      <h1 className="text-3xl mt-4 text-center font-bold">
        Our All Applications
      </h1>
      <p className="py-6 text-center mt-2" style={{ color: "#676282" }}>
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      {/*  */}
      <section>
        <div className="flex justify-between px-6 items-center">
          <h2 className="text-2xl mt-4 text-center font-bold">
            (20) Apps Found
          </h2>
          <fieldset className="fieldset">
            <input type="email" className="input" placeholder="Search" />
          </fieldset>
        </div>
        {/* All apps */}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center items-center mt-6 mx-8">
          {/* First apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image2} alt="" />
            <p className="font-bold">Forest: Focus for Productivity</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Second apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image3} alt="" />
            <p className="font-bold">SmPlan:ToDo List with Reminder</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Third apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image4} alt="" />
            <p className="font-bold">FLIP - Focus Timer for Study</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Fourth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image5} alt="" />
            <p className="font-bold">Pomocat - Cute Pomodoro Timer</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Fifth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image6} alt="" />
            <p className="font-bold">Time Planner: Schedule & Tasks</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Sixth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image7} alt="" />
            <p className="font-bold">Morning Habits - Daily Routine</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Seven apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image2} alt="" />
            <p className="font-bold">Focus Plant: Pomodoro Forest</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Eighth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image3} alt="" />
            <p className="font-bold">Alarmy - Alarm Clock & Sleep</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Ninth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image2} alt="" />
            <p className="font-bold">Forest: Focus for Productivity</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Tenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image3} alt="" />
            <p className="font-bold">SmPlan:ToDo List with Reminder</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Eleventh apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image4} alt="" />
            <p className="font-bold">FLIP - Focus Timer for Study</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Twelfth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image5} alt="" />
            <p className="font-bold">Pomocat - Cute Pomodoro Timer</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Thirteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image6} alt="" />
            <p className="font-bold">Time Planner: Schedule & Tasks</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Fourteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image7} alt="" />
            <p className="font-bold">Morning Habits - Daily Routine</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Fifteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image2} alt="" />
            <p className="font-bold">Focus Plant: Pomodoro Forest</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Sixteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image3} alt="" />
            <p className="font-bold">Alarmy - Alarm Clock & Sleep</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Seventeenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image4} alt="" />
            <p className="font-bold">FLIP - Focus Timer for Study</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Eighteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image5} alt="" />
            <p className="font-bold">Pomocat - Cute Pomodoro Timer</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Nineteenth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image6} alt="" />
            <p className="font-bold">Time Planner: Schedule & Tasks</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
          {/* Twentieth apps */}
          <div className="border p-4 rounded-sm shadow-md w-72 mt-6">
            <img className="w-60 h-50 rounded-xl mb-3" src={Image7} alt="" />
            <p className="font-bold">Morning Habits - Daily Routine</p>
            <div className="flex mt-2 justify-between">
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2 "
                style={{ backgroundColor: "#F1F5E8" }}
              >
                <img className="w-5 h-5" src={downloadIcon} alt="" />
                <p className="font-bold" style={{ color: "#00D390" }}>
                  9M
                </p>
              </div>
              <div
                className="h-10 w-18 rounded-sm p-2 flex gap-2"
                style={{ backgroundColor: "#FFF0E1" }}
              >
                <img className="w-5 h-5" src={ratingsIcon} alt="" />
                <p className="font-bold" style={{ color: "#FF8811" }}>
                  5
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Apps;
