import React from "react";
import { Input, Space, Radio, InputNumber, Form, Select, Switch } from "antd";
import HeaderLine from "./HeaderLine";
import { useState } from "react";
import { DoctorOptions, NurseOptions } from "./signData";
const { Item } = Form;
const { Option } = Select;
const UserType = ({ userType, staffType, setFormValues, formValues }) => {
  const [moreInf, setMoreInf] = useState(false);
  return userType === "patient" ? (
    {
      /* 
    <>
      <HeaderLine value="Introducing Your Issues" />
      <div>
        <HeaderLine
          value="Current issue"
          size={"sm"}
          font="medium"
          classLine={"w-1/2 border-1 mb-2"}
        />
        <Item name="currentissue">
          <Input.TextArea
            placeholder="State your current issue"
            showCount
            maxLength={100}
          />
        </Item>
      </div>
      <div className="flex justify-between gap-1">
        <div className="grow">
          <HeaderLine
            value="Illnesses history"
            size={"sm"}
            font="medium"
            classLine={"w-1/2 border-1 mb-2"}
          />
          <Item name="patienthistory">
            <Input.TextArea
              placeholder="Your diseases, illness history or other issues"
              showCount
              maxLength={200}
            />
          </Item>
        </div>
        <div className="grow">
          <HeaderLine
            value="Allergies"
            size={"sm"}
            font="medium"
            classLine={"w-1/2 border-1 mb-2"}
          />
          <Item name="allergie">
            <Input.TextArea placeholder="Allergies" showCount maxLength={100} />
          </Item>
        </div>
      </div>
      <div className="flex justify-between gap-1">
        <div className="grow">
          <HeaderLine
            value="Immunzations"
            size={"sm"}
            font="medium"
            classLine={"w-1/2 border-1 mb-2"}
          />
          <Item name="immunzation">
            <Input.TextArea
              placeholder="Immunzations"
              showCount
              maxLength={100}
            />
          </Item>
        </div>
        <div className="grow">
          <HeaderLine
            value="Surgeries"
            size={"sm"}
            font="medium"
            classLine={"w-1/2 border-1 mb-2"}
          />
          <Item name="surgerie">
            <Input.TextArea placeholder="Surgeries" showCount maxLength={100} />
          </Item>
        </div>
      </div>
  </> */
    }
  ) : userType === "staff" ? (
    <>
      {
        <>
          <Switch
            onChange={() => {
              setFormValues((val) => ({ ...val, moreInf: !moreInf }));
              setMoreInf((moreInf) => !moreInf);
            }}
            checked={moreInf}
            unCheckedChildren={"Show More"}
            checkedChildren={"Hide More"}
            className="!block !m-auto !mb-3"
          />
          {moreInf && (
            <>
              <HeaderLine value="Introducing Your Self" />
              <div className="flex gap-1 flex-wrap justify-between">
                <div className="grow">
                  <Item name="chospital">
                    <Input className="!w-full" placeholder="Current hosbital" />
                  </Item>
                </div>
                <div className="grow">
                  <Item name="gyear">
                    <InputNumber
                      min={1960}
                      max={2023}
                      className="!w-full"
                      placeholder="Graduation year"
                    />
                  </Item>
                </div>
                <div className="grow">
                  <Item name="eyears">
                    <InputNumber
                      min={0}
                      max={50}
                      className="!w-full"
                      placeholder="experinces years"
                    />
                  </Item>
                </div>
                <div className="grow">
                  <Item name="salary">
                    <InputNumber
                      className="!w-full"
                      placeholder="Salary"
                      min={1000}
                      max={500000}
                    ></InputNumber>
                  </Item>
                </div>
              </div>
              <Item name="about">
                <Input.TextArea
                  placeholder="breifly, information about your self"
                  showCount
                  maxLength={200}
                />
              </Item>
              <Item name="achievement">
                <Input.TextArea
                  placeholder="your experinces and certifcates"
                  showCount
                  maxLength={200}
                />
              </Item>
            </>
          )}
        </>
      }
      <Item
        name="staffType"
        rules={[
          {
            required: true,
            message: "you must choose between nurse or doctor",
          },
        ]}
      >
        <Radio.Group>
          <Radio.Button
            className={`!hover:bg-gray-400 !border-2 
             !text-white ${
               staffType === "nurse" ? "!bg-orange-500" : "!bg-yellow-700"
             }
              `}
            value="nurse"
          >
            nurse
          </Radio.Button>
          <Radio.Button
            className={`!hover:bg-gray-400 !border-2 !text-white 
            ${staffType === "doctor" ? "!bg-orange-500" : "!bg-yellow-700"}
            `}
            value="doctor"
          >
            doctor
          </Radio.Button>
        </Radio.Group>
      </Item>
      {staffType && (
        <>
          <HeaderLine value="Your Specialty" />
          <Item
            name={staffType == "doctor" ? "specialtyDoctor" : "specialtyNurse"}
            rules={[
              {
                required: true,
                message: "you must choose your job type",
              },
            ]}
          >
            <Select placeholder="Your specialty">
              {staffType == "nurse" ? NurseOptions : DoctorOptions}
            </Select>
          </Item>
        </>
      )}
    </>
  ) : null;
};

export default UserType;
