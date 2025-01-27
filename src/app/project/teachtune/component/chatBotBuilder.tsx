import styled from '@emotion/styled'
import { useEffect } from 'react'
import ReactFlow, { Background, BackgroundVariant, Controls, useEdgesState, useNodesState } from 'reactflow'
import 'reactflow/dist/style.css'
import { State } from '../type/state'
import { StartMessageNode } from './startMessageNode'
import { TextInputNode } from './textInputNode'

export interface Props {
  initialStateDiagram?: State[]
  currentStateId?: string
  readonly?: boolean
}

export interface NodeData {
  ifText: string
  thenText: string
  label: string
  active: boolean
  onChangeStartMessage?: (str: string) => void
  onChangeIf?: (str: string) => void
  onChangeThen?: (str: string) => void
}

const nodeTypes = { textInputNode: TextInputNode, startMessageNode: StartMessageNode }

export const ChatBotBuilder = ({ initialStateDiagram = [], readonly = false }: Props) => {
  const [nodes, setNodes] = useNodesState<NodeData>([])
  const [edges, setEdges] = useEdgesState([])

  useEffect(() => {
    setNodes(
      initialStateDiagram.map(({ id, parentId, ifText, thenText, x, y }) => {
        if (id === '0') {
          return {
            id,
            type: 'startMessageNode',
            position: { x, y },
            data: {
              ifText,
              thenText,
              label: '0',
              active: true,
            },
          }
        } else {
          return {
            id,
            type: 'textInputNode',
            position: { x, y },
            data: {
              ifText,
              thenText,
              label: id,
              active: false,
            },
          }
        }
      })
    )
    setEdges(
      initialStateDiagram.flatMap(({ id, parentId }) =>
        parentId.map(parentId => ({
          id: `${parentId}->${id}`,
          source: parentId,
          target: id,
          animated: true,
          style: { strokeWidth: 4 },
        }))
      )
    )
  }, [setEdges, setNodes, initialStateDiagram])

  return (
    <Flow
      nodeTypes={nodeTypes}
      nodes={nodes}
      edges={edges}
      minZoom={0.2}
      fitView
      edgesUpdatable={false}
      edgesFocusable={!readonly}
      nodesFocusable={!readonly}
      nodesConnectable={!readonly}
      elementsSelectable={!readonly}
    >
      <Controls />
      <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
    </Flow>
  )
}

const AutoLayoutButton = styled.button`
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 27px;

  :hover {
    background: #f4f4f4;
  }
`

const Flow = styled(ReactFlow)`
  .react-flow__handle.connectionindicator {
    width: 20px;
    height: 20px;
  }
  .react-flow__handle-top {
    top: -8px;
  }
  .react-flow__handle-bottom {
    bottom: -8px;
  }
  .react-flow__panel.right {
    display: none;
  }
`
