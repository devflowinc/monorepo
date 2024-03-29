import React from 'react'
import { Table, Text } from '@shared/components'
import { ColumnDef, createColumnHelper, SortingState } from '@tanstack/react-table'
import { ExpandedJudgeRecord } from './JudgeRecordsTable';
import { useRouter } from 'next/router';
import omit from 'lodash/omit';

export interface JudgeRecordTableProps {
  data: ExpandedJudgeRecord;
}

const JudgeRecordTable = ({ data }: JudgeRecordTableProps) => {
  const { query, ...router } = useRouter();
  const column = createColumnHelper<ExpandedJudgeRecord['rounds'][0]>();

  return (
    <div>
      <Text className="text-xl font-bold dark:text-gray-300 text-gray-700 mb-1">Teams</Text>
      <Table
        data={data.rounds}
        numLoadingRows={5}
        columnConfig={{
          core: [
            column.display({
              header: "Team",
              cell: props => props.row.original.result.team.aliases[0].code
            }),
            column.accessor('side', {
              header: "Side",
              cell: props => props.cell.getValue()
            }),
          ] as ColumnDef<ExpandedJudgeRecord['rounds'][0]>[],
          lg: [
            column.accessor('outcome', {
              header: "Result",
              cell: props => props.cell.getValue()
            })
          ] as ColumnDef<ExpandedJudgeRecord['rounds'][0]>[],
        }}
        onRowClick={(row) => router.push({
          pathname: `/teams/${row.result.team.id}`,
          query: omit(query, ['id'])
        })}
      />
    </div>

  )
}

export default JudgeRecordTable;
