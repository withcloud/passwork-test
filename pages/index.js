import React, { useState } from 'react'

// 主函數
const Index = () => {
  const abc = []
  for (let i = 65; i <= 90; i++) {
    abc.push(String.fromCharCode(i))
  }
  const [v1, setV1] = useState('hello world')
  const [v2, setV2] = useState('')
  const [v3, setV3] = useState('')
  const [v4, setV4] = useState('')
  const [compileArr, setCompileArr] = useState(abc)
  const [ascii, setAscii] = useState(0)

  const change = (text, ascii = 0) => {
    const arr = text.split('')
    let newtext = ''
    for (let i = 0; i < arr.length; i++) {
      // 判斷傳入的是否大寫 65:A    90:Z
      const textAscii = arr[i].charCodeAt()
      if (textAscii >= 65 && textAscii <= 90) {
        // 新的ascii碼，如果大於90則另外操作
        const newAsciiNum = textAscii + ascii
        if (newAsciiNum > 90) {
          const temAsciiNum = newAsciiNum - 91 + 65
          newtext += String.fromCharCode(temAsciiNum)
        } else if (newAsciiNum < 65) {
          const temAsciiNum = 91 - (65 - newAsciiNum)
          newtext += String.fromCharCode(temAsciiNum)
        } else {
          newtext += String.fromCharCode(newAsciiNum)
        }
      } else if (textAscii >= 97 && textAscii <= 122) {
        // 新的ascii碼，如果大於90則另外操作
        const newAsciiNum = textAscii + ascii
        if (newAsciiNum > 122) {
          const temAsciiNum = newAsciiNum - 123 + 97
          newtext += String.fromCharCode(temAsciiNum)
        } else if (newAsciiNum < 97) {
          const temAsciiNum = 123 - (97 - newAsciiNum)
          newtext += String.fromCharCode(temAsciiNum)
        } else {
          newtext += String.fromCharCode(newAsciiNum)
        }
      } else {
        newtext += arr[i]
      }
    }
    return newtext
  }
  const compile = (text, ascii = 0) => {
    const arr = text.split('')
    let newtext = ''
    for (let i = 0; i < arr.length; i++) {
      const textAscii = arr[i].charCodeAt()
      // 判斷傳入的是否大寫 65:A    90:Z
      if (textAscii >= 65 && textAscii <= 90) {
        // 新的ascii碼，如果大於90則另外操作
        const newAsciiNum = textAscii - ascii
        if (newAsciiNum > 90) {
          const temAsciiNum = newAsciiNum - 91 + 65
          newtext += String.fromCharCode(temAsciiNum)
        } else if (newAsciiNum < 65) {
          const temAsciiNum = 91 - (65 - newAsciiNum)
          newtext += String.fromCharCode(temAsciiNum)
        } else {
          newtext += String.fromCharCode(newAsciiNum)
        }
      } else if (textAscii >= 97 && textAscii <= 122) {
        // 新的ascii碼，如果大於90則另外操作
        const newAsciiNum = textAscii - ascii
        if (newAsciiNum > 122) {
          const temAsciiNum = newAsciiNum - 123 + 97
          newtext += String.fromCharCode(temAsciiNum)
        } else if (newAsciiNum < 97) {
          const temAsciiNum = 123 - (97 - newAsciiNum)
          newtext += String.fromCharCode(temAsciiNum)
        } else {
          newtext += String.fromCharCode(newAsciiNum)
        }
      } else {
        newtext += arr[i]
      }
    }
    return newtext
  }
  return (
    <div>
      <div className='flex'>
        <div className='mr-10'>
          <div>
            <h1 className='text-2xl'>這是正常英文字母轉為編譯後的英文字母</h1>
            <textarea
              className='w-full border-2 border-gray-300'
              value={v1}
              onChange={(e) => {
                setV1(e.target.value)
                const changeText = change(e.target.value, ascii)
                setV2(changeText)
              }}
            />
            <textarea className='w-full border-2 border-gray-300 mt-4' value={v2} readOnly />
          </div>
          <div>
            <h1 className='text-2xl mt-8'>這是編譯後的英文字母轉為正常的英文字母</h1>
            <textarea
              className='w-full border-2 border-gray-300'
              value={v3}
              onChange={(e) => {
                setV3(e.target.value)
                const changeText = compile(e.target.value, ascii)
                setV4(changeText)
              }}
            />
            <textarea className='w-full border-2 border-gray-300 mt-4' value={v4} readOnly />
          </div>
        </div>
        <div className='flex-1 mt-20'>
          <div>
            <div className='flex'>
              {
                abc.map(item => {
                  return (
                    <span key={item} className='mr-4 w-5'>{item}</span>
                  )
                })
              }
            </div>
            <div className='flex mt-4'>
              {
                compileArr.map(item => {
                  return (
                    <span key={item} className='mr-4 text-red-600 w-5'>{item}</span>
                  )
                })
              }
            </div>
          </div>
          <div>
            <button
              className='mr-5 p-2 pl-5 pr-5 bg-blue-500 text-gray-100 text-lg rounded-lg focus:border-4 border-blue-300' onClick={() => {
                setAscii(ascii + 1)
                const changeText = change(v1, ascii + 1)
                setV2(changeText)
                const V4changeText = compile(v3, ascii + 1)
                setV4(V4changeText)
                setCompileArr([...compileArr.map(item => item.charCodeAt() + 1 > 90 ? String.fromCharCode(65) : String.fromCharCode(item.charCodeAt() + 1))])
              }}
            >+
            </button>
            <button
              className='p-2 pl-5 pr-5 bg-red-500 text-gray-100 text-lg rounded-lg focus:border-4 border-red-300' onClick={() => {
                setAscii(ascii - 1)
                const changeText = change(v1, ascii - 1)
                setV2(changeText)
                const V4changeText = compile(v3, ascii - 1)
                setV4(V4changeText)
                setCompileArr([...compileArr.map(item => item.charCodeAt() - 1 < 65 ? String.fromCharCode(90) : String.fromCharCode(item.charCodeAt() - 1))])
              }}
            >-
            </button>
          </div>
          <div>當前ascii碼位移位數：{ascii}</div>
        </div>
      </div>
    </div>

  )
}

export default Index
