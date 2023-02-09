export function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 20"
      width={500}
      height={20}
      
    >
      <title>{"New Project"}</title>
      <defs>
        <image
          width={500}
          height={20}
          id="img1"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAAUAQMAAABBK13/AAAAAXNSR0IB2cksfwAAAANQTFRFAAAAp3o92gAAAAF0Uk5TAEDm2GYAAAASSURBVHicY2AYBaNgFIyCkQkABQAAAf/JeTgAAAAASUVORK5CYII="
        />
      </defs>
      <style>
        {
          '\n\t\ttspan { white-space:pre } \n\t\t.t0 { font-size: 24px;fill: #ffffff;font-weight: 600;font-family: "SourceSansPro-SemiboldIt", "Source Sans Pro" } \n\t'
        }
      </style>
      <use id="Background" href="#img1" x={0} y={0} />
      <text
        id="Text layer 1"
        style={{
          transform: "matrix(1,0,0,1,191,20)",
        }}
      >
        <tspan x={-151.3} y={0} className="t0">
          {"EVENT PLATFORM || CLASS LAB\n"}
        </tspan>
      </text>
    </svg>
  )
}
