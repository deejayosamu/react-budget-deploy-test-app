import React, { Component } from 'react'
import './ExpenseList.css'
import ExpenseItem from './ExpenseItem'
import { MdDelete } from 'react-icons/md'

const ExpenseList = ({handleDelete, handleEdit, clearItems, expenses}) => {
    return (
      <>
        <ul className='list'>
          {expenses.map(expense => {
            return(
              <ExpenseItem 
              expense = {expense}
              key = {expense.id}
              handleDelete = {handleDelete}
              handleEdit = {handleEdit}
              />
            )
          })}
        </ul>
        {expenses.length > 0 && (
          <button className='btn'>
            목록지우기
            <MdDelete  className='btn-icon' onClick={clearItems}/>
          </button>)}
        
      </>
    )
  }


export default ExpenseList